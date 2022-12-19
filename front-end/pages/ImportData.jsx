import React from 'react'
import { LinkedIn } from 'react-linkedin-sdk';


function ImportData() {
  const LinkedInData = () => (
    <LinkedIn
      clientId="77c4b9295xh60g"
      redirectUri="http://localhost:5173/account/import"
      scope="r_liteprofile r_emailaddress"
      onFailure={(error) => console.error(error)}
      onSuccess={(response) => console.log(response)}
    >
      {(props) => (
        <button onClick={props.onClick}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png" alt="LinkedIn logo" />
          Sign In with LinkedIn
        </button>
      )}
    </LinkedIn>
  );
  const fetchLinkedInData = () => {
    fetch('https://api.linkedin.com/v2/me', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      {/*<LinkedInData />;*/}
    </div>
  )
}

export default ImportData