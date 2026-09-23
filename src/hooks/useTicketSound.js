import { useEffect } from "react";

export default function useTicketSound() {
  useEffect(() => {
    let audioContext;
    const unlockAudio = () => {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      if (!audioContext) audioContext = new AudioContext();
      if (audioContext.state === "suspended")
        audioContext.resume().catch(() => {});
    };
    let tearing;
    const playTicketHover = (event) => {
      const ticket = event.target.closest?.(".ticket-button");
      if (!ticket || ticket.disabled || ticket.contains(event.relatedTarget))
        return;
      unlockAudio();
      if (audioContext?.state !== "running") return;
      tearing?.stop();
      const now = audioContext.currentTime;
      const duration = 0.24;
      const buffer = audioContext.createBuffer(
        1,
        Math.ceil(audioContext.sampleRate * duration),
        audioContext.sampleRate,
      );
      const samples = buffer.getChannelData(0);
      for (let i = 0; i < samples.length; i++) {
        const t = i / audioContext.sampleRate;
        // Uneven noise bursts imitate paper fibres tearing along perforations.
        const fibres = Math.pow(
          Math.max(0, Math.sin(t * 430) * Math.sin(t * 173)),
          2,
        );
        samples[i] = (Math.random() * 2 - 1) * (0.15 + fibres * 0.85);
      }
      const source = audioContext.createBufferSource();
      source.buffer = buffer;
      const filter = audioContext.createBiquadFilter();
      filter.type = "highpass";
      filter.frequency.value = 1100;
      const gain = audioContext.createGain();
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.18, now + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
      source.connect(filter).connect(gain).connect(audioContext.destination);
      tearing = source;
      source.onended = () => {
        source.disconnect();
        filter.disconnect();
        gain.disconnect();
        if (tearing === source) tearing = null;
      };
      source.start(now);
    };
    window.addEventListener("pointerdown", unlockAudio, { once: true });
    window.addEventListener("keydown", unlockAudio, { once: true });
    document.addEventListener("pointerover", playTicketHover);
    return () => {
      window.removeEventListener("pointerdown", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
      document.removeEventListener("pointerover", playTicketHover);
      tearing?.stop();
      audioContext?.close().catch(() => {});
    };
  }, []);
}
