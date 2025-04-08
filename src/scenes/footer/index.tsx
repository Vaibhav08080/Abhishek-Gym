import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Welcome to Evogym, where fitness meets community. We are dedicated
            to helping you achieve your health and wellness goals with expert
            guidance and state-of-the-art facilities.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Quick Links</h4>
          <p className="my-5">About Us</p>
          <p className="my-5">Our Classes</p>
          <p>Membership Plans</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Feel free to reach out for any inquiries or support.</p>
          <p>(333) 425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
