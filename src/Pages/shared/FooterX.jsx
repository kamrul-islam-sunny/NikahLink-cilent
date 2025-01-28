import { Footer } from "flowbite-react";


const FooterX = () => {
  return (
    <div className="">
      <Footer className="border-t-2 border-rose-500 border-dashed pt-10 bg-gradient-to-b from-pink-100 to-rose-50 rounded-none"  container>
      <div className="w-full text-center ">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500">NikahLink </h1>
          <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="NikahLink" year={2025} />
      </div>
    </Footer>
    </div>
  );
};

export default FooterX;