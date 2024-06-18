function ListMedia({ media }) {
  return (
    <>
      <div>
        <h2>Media</h2>
        <ul>
          {media.map((item, index) => (
            <li key={index}>
              <img src={item.url} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListMedia;
