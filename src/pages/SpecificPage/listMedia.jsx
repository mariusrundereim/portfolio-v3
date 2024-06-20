function ListMedia({ media }) {
  return (
    <>
      <div>
        <h2 className="text-4xl mb-6">Showcase</h2>
        <ul className="flex flex-col gap-4">
          {media.map((item, index) => (
            <li key={index}>
              <img src={item.url} className="rounded-lg" alt="" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListMedia;
