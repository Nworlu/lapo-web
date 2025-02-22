import React from "react";

type Props = {
  onClose: () => void;
};
const DownloadFileModal = (props: Props) => {
  const { onClose } = props;
  return (
    <div
      style={{
        backdropFilter: "blur(5px)",
      }}
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center"
    >
      <div
        style={{
          boxShadow: "0px 8px 8px -4px #10182808",
        }}
        className="max-w-md bg-white rounded-xl w-full h-fit p-6 flex flex-col gap-4"
      >
        <div className="border border-[#EAECF0] bg-white w-14 h-12 rounded-xl"></div>
        <div className="flex flex-col gap-1">
          <h4 className="text-[#101828] text-lg font-medium">Successful</h4>
          <p className="text-[#475467] text-sm font-normal">
            Production file has been downloaded.
          </p>
        </div>
        <button
          onClick={onClose}
          style={{
            boxShadow: "0px 1px 2px 0px #1018280D",
          }}
          className="bg-[#014DAF] w-28 h-10 rounded teext-center text-sm text-white font-medium mt-7"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default DownloadFileModal;
