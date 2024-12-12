

export const Location = () => {
  const locationURL = "https://maps.app.goo.gl/ygJVpM3fQ5Kmgyhm8"; // Replace with your link

  return (
    <div style={{ textAlign: "center" }}>
      <a href={locationURL} target="_blank" rel="noopener noreferrer">
        <img
          src="https://www.google.com/maps/vt/data=xIsgL-AbRwwo1Un3czui1-r3WJlbQ0KxP5B-b3bv3DUXxoDnEgCbS_-CREY3UjezTC51dl8anIDSqkVwewKsc0PiynCLJJXIOCA-oClXdZDXwFjkRpL42smbKN8zsXJtPNKV7gRWRG_nQ1M02G2tpJHp6NkJqG2XkHnD3E4RakU9GMFfFEk9B-haxdHBkuJgpSb2o9REYcto2-z1XzzhnHlgY8Z7TFlV1tXe_DOeZ-vtJfDDEVmggjWOvvKTXqBbO2ST9XR1AVkyp-PZfTI"
          alt="Directions to With Grace Counseling Office"
          className="map-image"
          style={{
            width: "100%",
            maxWidth: "400px",
            height: "auto",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
          }}
        />
      </a>
    </div>
  );
};

