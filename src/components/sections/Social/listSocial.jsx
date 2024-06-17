import LinkTag from "../../core/Tag/LinkTag";
function ListSocial() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <LinkTag
          brand="linkedin"
          href="https://www.linkedin.com/in/mariusrundereim/"
        >
          LinkedIn
        </LinkTag>
        <LinkTag
          brand="instagram"
          href="https://www.instagram.com/mariusrundereim"
        >
          Instagram
        </LinkTag>
        <LinkTag brand="github" href="https://github.com/mariusrundereim">
          GitHub
        </LinkTag>
        <LinkTag
          brand="spotify"
          href="https://open.spotify.com/user/mariusrundereim?si=df8a11ec9d9d4027"
        >
          Spotify
        </LinkTag>
      </div>
    </>
  );
}

export default ListSocial;
