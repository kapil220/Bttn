import FileUpload from "./fileupload";

function Modal() {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn bg-blue-950 text-white"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Upload Records
      </button>

      <dialog id="my_modal_1" className="modal ">
        <div className="modal-box">
          <div className="grid gap-4">
            <div className="row-start-1">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-start-1">
                  <h3 className="font-bold text-lg ">Upload Records</h3>
                </div>

                <div className=" absolute right-10">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button>X</button>
                  </form>
                </div>
              </div>
            </div>
            <hr />
            <div className="row-start-6">
              <div>
                <FileUpload />
                <div className=" text-center">
                  <p className="mt-4 text-sm text-gray-500 ">
                    We currently support PDF, DOC, PNG, and JPEG formats. You
                    can upload up to 10 files at once, each up to 50MB.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Modal;
