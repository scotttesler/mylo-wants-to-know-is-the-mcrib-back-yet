function Index() {
  return (
    <div className="parent">
      <div className="child">mylo wants to know, is the McRib back yet?</div>
      <div className="child no">no</div>
      <img className="mcrib-image" alt="mcrib" src="/images/McRib.jpg" />

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

export default Index;
