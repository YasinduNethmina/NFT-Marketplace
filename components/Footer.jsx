import { useTheme } from 'next-themes';
import Image from 'next/image';

import images from '../assets';
import Button from './Button';

const FooterLinks = ({ heading, items, extraClasses }) => (
  <div className={`flex-1 items-start justify-start ${extraClasses}`}>
    <h3 className="mb-10 font-poppins text-xl font-semibold text-nft-black-1 dark:text-white">{heading}</h3>
    {items.map((item, index) => <p key={item + index} className="my-3 cursor-pointer font-poppins text-base font-normal text-nft-black-1 hover:text-nft-black-1 dark:text-white dark:hover:text-nft-gray-1">{item}</p>)}
  </div>
);

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="flexCenter flex-col border-t border-nft-gray-1 py-16 dark:border-nft-black-1 sm:py-8">
      <div className="flex w-full flex-row px-16 md:flex-col sm:px-4 minmd:w-4/5">
        <div className="flexStart flex-1 flex-col">
          <div className="flexCenter cursor-pointer">
            <Image src={images.logo02} objectFit="contain" width={32} height={32} alt="logo" />
            <p className=" ml-1 text-lg font-semibold text-nft-dark dark:text-white">Bopensea</p>
          </div>
          <p className="mt-6 font-poppins text-base font-semibold text-nft-black-1 dark:text-white">Get the latest updates</p>
          <div className="flexBetween mt-6 w-357 rounded-md border border-nft-gray-2 bg-white dark:border-nft-black-2 dark:bg-nft-black-2 md:w-full minlg:w-557">
            <input type="email" placeholder="Your Email" className="h-full w-full flex-1 rounded-md bg-white px-4 font-poppins text-xs font-normal text-nft-black-1 outline-none dark:bg-nft-black-2 dark:text-white minlg:text-lg" />
            <div className="flex-initial">
              <Button
                btnName="Email me"
                btnType="primary"
                classStyles="rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="flexBetweenStart ml-10 flex-1 flex-wrap md:ml-0 md:mt-8">
          <FooterLinks heading="Bopensea" items={['Explore', 'How it Works', 'Contact Us']} />
          <FooterLinks heading="Support" items={['Help Center', 'Terms of service', 'Legal', 'Privacy policy']} extraClasses="ml-4" />
        </div>
      </div>

      <div className="flexCenter mt-5 w-full border-t border-nft-gray-1 px-16 dark:border-nft-black-1 sm:px-4">
        <div className="flexBetween mt-7 w-full flex-row sm:flex-col minmd:w-4/5">
          <p className="font-poppins text-base font-semibold text-nft-black-1 dark:text-white">Bopensea, Inc. All Rights Reserved</p>
          <div className="flex flex-row sm:mt-4">
            {[images.instagram, images.twitter, images.telegram, images.discord].map((image, index) => (
              <div className="mx-2 cursor-pointer" key={`image ${index}`}>
                <Image src={image} key={index} objectFit="contain" width={24} height={24} alt="social" className={theme === 'light' ? 'invert' : undefined} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
