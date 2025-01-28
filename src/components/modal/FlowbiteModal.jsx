import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";

import toast from "react-hot-toast";

const FlowbiteModal = ({ isOpen, setIsOpen }) => {
  const axiosPublic = useAxiosPublic()
  const {user} = useAuth()
  const handleReqPremium = () =>{
    axiosPublic.patch(`/user/request_premium/${user?.email}`)
    .then((res) => {
      // console.log(res.data)
      if(res.data.modifiedCount > 0)
      {
        toast.success('Request sent to admin.Please Wait')
      }else{
        toast.error('Request sent to admin.Please Wait')
      }
      setIsOpen(false)
    })
  }

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        {/* Add backdrop blur */}
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm">
          {/* Modal Content */}
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <DialogPanel className="max-w-lg space-y-4 border bg-white p-12 text-center rounded-lg shadow-lg">
              <DialogTitle className="font-bold text-xl">
                Confirm Premium Request
              </DialogTitle>
              <Description>
                Are you sure you want to make your biodata premium?
              </Description>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={handleReqPremium}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Confirm
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default FlowbiteModal;
