import drishyamFilmsVideo from "../assets/videos/DrishyamFilms.mp4";

export default function VideoDialogs({
  premiereOpen,
  setPremiereOpen,
  modal,
  setModal,
}) {
  return (
    <>
      {premiereOpen && (
        <div
          className={"video-modal"}
          role={"dialog"}
          aria-modal={"true"}
          aria-label={"Drishyam Films — Our Story video"}
          onClick={() => setPremiereOpen(false)}
        >
          <div
            className={"video-modal-content"}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={"video-modal-close"}
              onClick={() => setPremiereOpen(false)}
              aria-label={"Close video"}
            >
              &times;
            </button>
            <video src={drishyamFilmsVideo} autoPlay controls playsInline />
          </div>
        </div>
      )}
      {modal && (
        <div className="modal" onClick={() => setModal(null)}>
          <div
            className="modal-content film-video-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`${modal.title} video`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              aria-label="Close video"
              onClick={() => setModal(null)}
            >
              &times;
            </button>
            <video
              src={modal.video}
              poster={modal.image}
              autoPlay
              controls
              playsInline
            />
          </div>
        </div>
      )}
    </>
  );
}
