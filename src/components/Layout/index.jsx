import ScrollToTop from "../ui/ScrollToTop";

function Layout({ children }) {
  return (
    <>
      <ScrollToTop />
      {children}
    </>
  );
}

export default Layout;
