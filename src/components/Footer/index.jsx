import digiftLogo from "../../Assets/images/digift_logo.svg";
import facebook from "../../Assets/images/facebook.svg";
import twitter from "../../Assets/images/twitter.svg";
import instagram from "../../Assets/images/instagram.svg";
import linkedin from "../../Assets/images/linkedin.svg";
import footerArrow from "../../Assets/images/footer_arrow.svg";
import scrollToTop from "../../Assets/images/scroll_to_top.svg";

const Footer = () => {
  return (
    <div className="footer_container text-sm pt-[64px] mb-[106px]">
      <div className="flex flex-col md:flex-row gap-x-[72px] pb-16">
        <div className="basis-2/3 flex flex-col md:flex-row justify-between ">
          <div>
            <a href="#">
              <img src={digiftLogo} alt="digift Logo" />
            </a>
            <h4 className="text-arrivalheader font-medium mt-4">Creating Happiness One Giftcard at a Time.</h4>
            <div className="flex flex-row gap-x-4 mt-10 mb-8">
              <a href="#">
                <img src={instagram} alt="instagram link" />
              </a>
              <a href="#">
                <img src={facebook} alt="facebook link" />
              </a>
              <a href="#">
                <img src={twitter} alt="twitter link" />
              </a>
              <a href="#">
                <img src={linkedin} alt="digift Logo" />
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-y-8 mb-8 text-left">
            <div className="flex flex-col gap-y-2">
              <h4 className="text-arrivalheader font-medium">Contact us</h4>
              <p className="text-arrivalfilters">hello@digiftng.com</p>
            </div>
            <div className="flex flex-col gap-y-2">
              <h4 className="text-arrivalheader font-medium">Office</h4>
              <p className="text-arrivalfilters max-w-[166px]">226, Awolowo road, Ikoyi, Lagos State, Nigeria</p>
            </div>

            <div className="flex flex-col md:flex-row text-arrivalfilters gap-4">
              <p className="flex flex-row gap-x-[9px] items-center">
                <span>Our privacy policy</span>
                <span>
                  <img src={footerArrow} alt="" />
                </span>
              </p>
              <p className="flex flex-row gap-x-[9px] items-center">
                <span>Terms and Condition</span>
                <span>
                  <img src={footerArrow} alt="" />
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="basis-1/3 flex flex-col  md:flex-row gap-y-8 justify-between">
          <div className="flex flex-col gap-y-6">
            <h4 className="text-arrivalheader font-semibold">Company</h4>
            <p className="text-arrivalfilters">Careers</p>
            <p className="text-arrivalfilters">FAQ</p>
          </div>

          <div className="flex flex-col gap-y-6">
            <h4 className="text-arrivalheader font-semibold">Products</h4>
            <p className="text-arrivalfilters">Personal</p>
            <p className="text-arrivalfilters">Business</p>
            <p className="text-arrivalfilters">Vendor</p>
          </div>

          <div className="flex flex-col gap-y-6">
            <h4 className="text-arrivalheader font-semibold">Contact</h4>
            <a href="#" className="text-arrivalfilters">Instagram</a>
            <a href="#" className="text-arrivalfilters">Twitter</a>
            <a href="#" className="text-arrivalfilters">LinkedIn</a>
            <a href="#" className="text-arrivalfilters">Facebook</a>
          </div>
        </div>

      </div>
      <div className="flex flex-col gap-y-6 text-arrivalfilters">
        <div className="flex flex-row items-center gap-x-6">
          <img src={scrollToTop} alt="scroll to top of the page" />
          <p className="text-left ">
            The website www.digiftng.com is owned and operated by Blinksky
            Nigeria Limited, a company duly registered under the Laws of the
            Federal Republic of Nigeria with RC Number: 1656204. Trademark to
            all logos of Giftcards are owned by their respective brands and
            Blinksky Nigeria Limited doesn’t claim ownership of these
            trademarks. All Giftcards dominated in USD are provided in
            conjunction with BlinkSky Inc. Users must have valid US account and
            in some cases a valid US address before purchasing.
          </p>
        </div>
        <p className="text-left">Copyright © 2022 Blinksky Nigeria Limited</p>
      </div>
    </div>
  );
};

export default Footer;
