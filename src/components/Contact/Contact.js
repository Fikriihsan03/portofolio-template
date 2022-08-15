import styles from "./Contact.module.css";

const Contact = ({ gradientStart, gradientEnd }) => {
  return (
    <>
      <div>
        <div
          className={`${styles.Wave} h-[640px] bg-gradient-to-r from-[${gradientStart}] to-[${gradientEnd}] flex flex-col justify-start items-center`}
        >
          <h1 className="text-5xl font-bold mt-[250px] text-white">Contacts</h1>
        </div>
      </div>
    </>
  );
};

export default Contact;
