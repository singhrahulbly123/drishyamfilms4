import TicketButton from "../components/TicketButton";
import Arrow from "../components/Arrow";
import contactBackgroundImage from "../assets/images/maxres1.jpg";

export default function ContactSection({ contactStatus, setContactStatus }) {
  const handleContactSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const mobile = String(data.get("mobile") || "").replace(/\D/g, "");
    const attachment = data.get("attachment");
    const validDocument =
      attachment instanceof File &&
      /\.(pdf|doc|docx)$/i.test(attachment.name) &&
      attachment.size <= 5 * 1024 * 1024;
    if (!/^\d{10}$/.test(mobile)) {
      setContactStatus("Please enter an exact 10-digit mobile number.");
      return;
    }
    if (!validDocument) {
      setContactStatus("Attach a PDF, DOC, or DOCX file up to 5 MB.");
      return;
    }
    setContactStatus(
      "Form validated successfully. Our team will review your enquiry.",
    );
    form.reset();
  };
  return (
    <section
      id="contact"
      className="contact-section px-5 py-20 text-white sm:px-8 lg:px-14 lg:py-28"
      style={{ "--contact-bg": `url(${contactBackgroundImage})` }}
    >
      <div className="contact-content mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
        <div className="flex flex-col justify-between border-t border-white/25 pt-6">
          <div>
            <p className="font-sans text-[10px] font-bold tracking-[.18em] text-white">
              CONTACT US
            </p>
            <h2 className="mt-5 max-w-md text-5xl font-extrabold leading-[.9] tracking-[-.07em] sm:text-6xl">
              Start a <em>conversation.</em>
            </h2>
            <p className="mt-7 max-w-md text-sm leading-7 text-white/65 sm:text-base">
              Have a film or collaboration in mind? Send us a short note.
            </p>
          </div>
        </div>

        <form
          className="border-t border-white/25 pt-6"
          onSubmit={handleContactSubmit}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block sm:col-span-2">
              <span className="mb-2 block font-sans text-[10px] font-bold tracking-[.14em] text-white/65">
                FULL NAME *
              </span>
              <input
                className="w-full border border-white/25 bg-transparent px-4 py-3.5 text-sm outline-none transition focus:border-white"
                name="fullName"
                type="text"
                autoComplete="name"
                required
              />
            </label>
            <label className="block">
              <span className="mb-2 block font-sans text-[10px] font-bold tracking-[.14em] text-white/65">
                EMAIL *
              </span>
              <input
                className="w-full border border-white/25 bg-transparent px-4 py-3.5 text-sm outline-none transition focus:border-white"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </label>
            <label className="block">
              <span className="mb-2 block font-sans text-[10px] font-bold tracking-[.14em] text-white/65">
                MOBILE NUMBER *
              </span>
              <input
                className="w-full border border-white/25 bg-transparent px-4 py-3.5 text-sm outline-none transition focus:border-white"
                name="mobile"
                type="tel"
                inputMode="numeric"
                pattern="[0-9]{10}"
                minLength={10}
                maxLength={10}
                autoComplete="tel"
                required
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-2 block font-sans text-[10px] font-bold tracking-[.14em] text-white/65">
                MESSAGE *
              </span>
              <textarea
                className="min-h-32 w-full resize-y border border-white/25 bg-transparent px-4 py-3.5 text-sm outline-none transition focus:border-white"
                name="message"
                required
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-2 block font-sans text-[10px] font-bold tracking-[.14em] text-white/65">
                ATTACH DOCUMENT *
              </span>
              <input
                className="block w-full border border-dashed border-white/30 bg-transparent px-4 py-3 text-xs text-white/70 file:mr-4 file:border-0 brand-file-input file:px-3 file:py-2 file:font-sans file:text-[10px] file:font-bold file:tracking-[.1em] file:text-black"
                name="attachment"
                type="file"
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                required
              />
              <span className="mt-2 block font-sans text-[9px] tracking-[.1em] text-white/40">
                PDF, DOC OR DOCX · MAXIMUM 5 MB
              </span>
            </label>
          </div>
          {contactStatus && (
            <p
              className="mt-5 font-sans text-[11px] tracking-[.05em] text-white"
              role="status"
            >
              {contactStatus}
            </p>
          )}
          <TicketButton
            className="contact-submit ticket-button mt-7"
            type="submit"
          >
            SEND ENQUIRY <Arrow />
          </TicketButton>
        </form>
      </div>
    </section>
  );
}
