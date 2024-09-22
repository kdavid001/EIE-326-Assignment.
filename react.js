const user = {
    name: 'Hedy Lamarr',
    imageUrl: '/Users/davidkorede/Documents/GitHub/Classwork-/The+Batman+-+Stand+in+red+2022.jpeg',
    imageSize: 90,
  };
  
  export default function Profile() {
    return (
      <>
        <h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
      </>
    );
  }
  