
import Container from "../../layout/Container";
const Footer = () => {
  return (
    <div className="bg-[#FFE577] dark:bg-black dark:text-white pt-16 pb-10">
      <Container>
        <div className="container mx-auto grid  grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <p >
              Consectetur adipiscing lorem ipsum dolor sit amet, elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <h1 className="text-xl font-semibold">ABOUT US</h1>
            <div className=" pt-8 space-y-3">
              <p>History</p>
              <p>Careers Social</p>
              <p>Awards</p>
              <p>Affiliate Program</p>
              <p>Business With Us</p>
              <p>Press Release</p>
              <p>Delivery Terms</p>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-semibold">INFORMATION</h1>
            <div className=" pt-8 space-y-3">
              <p>Special Offers</p>
              <p>Gift Cards</p>
              <p>Discount Sales</p>
              <p>Privacy Policy</p>
              <p>Terms & Condition</p>
              <p>Store Location</p>
              <p>Teams of Use</p>
            </div>
          </div>

          <div>
            <h1 className="text-xl font-semibold">CONTACT US</h1>
            <div className=" pt-8 space-y-3">
              <div className="flex items-center gap-2">
                <div>
                  <p>Through Whatsapp</p>
                  <h1 className="text-2xl font-extrabold">+977565445545</h1>
                </div>
              </div>
              <p>No: 58 A, East Madison Street, Baltimore,</p>
              <p>USA 4508</p>
              <p>E-Mail: junnun@example.com</p>
            </div>
          </div>
        </div>
        <div className="pt-28">
          <div className=" border-t border-gray-700/20 shadow-xl"></div>
          <div className="container mx-auto flex justify-between items-center pt-5">
            <h1 className="text-sm">
              © 2024 All Rights Reserved.{" "}
              
            </h1>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
