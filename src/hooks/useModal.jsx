import AuthDialog from "@/components/shared/navigation/AuthDialog";
import LoginRequiredDialog from "@/components/shared/navigation/LoginRequiredDialog";
import { setAuthModalStatus, setLoginModalStatus } from "@/store/module/shared/sharedSlice";
import { useDispatch, useSelector } from "react-redux";

function useModal() {
  const { isAuthModalOpen, isLoginModalOpen } = useSelector(
    (state) => state.shared
  );
  const dispatch = useDispatch();

  const setIsAuthDialogOpen = (isOpen) => {
    dispatch(setAuthModalStatus(isOpen));
  };
  const setLoginRequiredDialogOpen = (isOpen) => {
    dispatch(setLoginModalStatus(isOpen));
  };

  const authModal = (
    <AuthDialog isOpen={isAuthModalOpen} setIsOpen={setIsAuthDialogOpen} />
  );
  const loginModal = (
    <LoginRequiredDialog
      isOpen={isLoginModalOpen}
      setIsOpen={setLoginRequiredDialogOpen}
      setIsAuthDialogOpen={setIsAuthDialogOpen}
    />
  );
  return {
    authModal,
    loginModal,
    setIsAuthDialogOpen,
    setLoginRequiredDialogOpen,
  };
}

export default useModal;
