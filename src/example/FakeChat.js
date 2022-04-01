import { useState, useEffect } from "react";

const courses = [
  {
    id: 1,
    name: "HTML, CSS",
  },
  {
    id: 2,
    name: "React JS",
  },
  {
    id: 3,
    name: "React Native",
  },
];

const Chat = () => {
  const [selected, setSelected] = useState(1);

  const handleComment = ({ detail }) => {
    console.log(detail);
  };
  useEffect(() => {
    window.addEventListener(`lession-${selected}`, handleComment);

    //clearn up function
    return () => {
      window.removeEventListener(`lession-${selected}`, handleComment);
    };
  }, [selected]);

  return (
    <div>
      <ul>
        {courses.map((c) => (
          <li
            key={c.id}
            style={
              selected === c.id
                ? {
                    color: "red",
                  }
                : {}
            }
            onClick={(e) => {
              setSelected(c.id);
            }}
          >
            <h3>{c.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

const PreviewAvatar = () => {
  const [avatar, setAvatar] = useState();

    useEffect(()=>{
        return()=>{
            URL.revokeObjectURL(avatar);
        }
    },[avatar])

  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];

    setAvatar(URL.createObjectURL(file));
    e.target.value =null;
  };
  return (
    <div>
      <input type="file" onChange={handlePreviewAvatar} />
      {avatar && <img src={avatar} alt="" width="50%" />}
    </div>
  );
};
export default PreviewAvatar;
