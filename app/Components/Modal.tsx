export default function Modal() {
  return (
    <dialog>
      <div className="modal">
        <div className="modal__inner">
          <h3 className="modal__title"></h3>
          <input
            type="text"
            className="w-full py-3 px-6 border border-violet-500 outline-none"
          />
          <label
            htmlFor="file-inp"
            className="w-full py-3 px-6 border border-violet-500 outline-none"
          >
            <input id="file-inp" type="file" className="none" />
          </label>
        </div>
      </div>
    </dialog>
  );
}
