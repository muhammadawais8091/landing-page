export { };

declare global {
  interface Window {
    cabaPopup: {
      open: ({ hookVideo: boolean, designAdvice: boolean, customerSupport: boolean }) => void,
      openDesignAdvice: () => void,
      openCustomerSupport: () => void,
    }
  }
}