import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function toastMessage(toastString) {
  toast(toastString, {
    autoClose: 3000,
    closeButton: false,
    hideProgressBar: true,
    style: {
      color: 'white',
      backgroundColor: '#1dd1a1',
      fontWeight: 'bold',
    },
  });
}

//Import this "toastMessage"-function and provide it with a toastString in the component you want to show the messsage"

//Also import "import { ToastContainer } from 'react-toastify'; "
//And place the ToastContainer in the jsx
