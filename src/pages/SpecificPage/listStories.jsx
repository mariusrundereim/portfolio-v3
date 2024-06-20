function ListStories({ stories }) {
  return (
    <>
      <div>
        <h2 className="text-4xl mb-6">User stories</h2>
        <ul className="space-y-2">
          {stories.map((story, index) => (
            <li key={index} className="text-2xl">
              {story}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListStories;
