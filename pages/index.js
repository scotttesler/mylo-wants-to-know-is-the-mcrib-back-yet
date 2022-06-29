import mcRibImage from "public/images/McRib.jpg";
import Image from "next/image";

export default function Index() {
  return (
    <div className="parent">
      <div className="child">mylo wants to know, is the McRib back yet?</div>
      <div className="child no">no</div>
      <Image alt="McRib" className="mcrib-image" src={mcRibImage} />

      <style jsx>{`
        .child {
          font-size: 2rem;
          padding: 14px 0;
        }

        .mcrib-image {
          width: 100%;
        }
        
        .no {
          color: red;
        }

        .yes {
          color: green;
        }

        .parent {
          display: grid;
          font-family: Helvetica, Arial, sans-serif;
          place-items: center;
          overflow: auto;
          resize: both;
        }
      `}</style>
    </div>
  );
}
