import { useEffect, useState } from "react";
//---------------
// 1. useEffect (callback)
//    => goi callback moi khi component re-render
//    => goi callback sau khi component them vao DOM

// 2. useEffect (callback, [])
//      => chi goi callback 1 lan sau khi component  mounted
// 3. useEffect (callback, [dependencies])
//      =>callback se duoc goi lai moi khi dependencies thay doi

//---------------giong nhau
// 1/ useEffect luon duoc goi sau khi component Mounted
// 2/ clearnup function luon duoc goi truoc khi component Unmounted

const Content = () => {
  const [title, setTitle] = useState("");
  const [posts, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((post) => {
        setPost(post);
      });
  }, []);

  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
};

//-------xay dung tab call API: posts, comments, albums, photos
const myTabs = ["posts", "albums", "photos"];
const Tab = () => {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");

  useEffect(() => {
    document.title = title;
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, [type]);

  //   const handleClick = () => {
  //     console.log(type);
  //     console.log(`https://jsonplaceholder.typicode.com/${type}`);
  //     fetch(`https://jsonplaceholder.typicode.com/${type}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setPosts(data);
  //       });
  //   };
  return (
    <div>
      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <div>
        {myTabs.map((tab, index) => (
          <button
            key={index}
            style={
              type === tab
                ? {
                    color: "#fff",
                    backgroundColor: "#000",
                  }
                : {}
            }
            onClick={(e) => {
              setType(tab);
              // handleClick();
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <ul>
        {posts.map((p) => (
          <div key={p.id}>
            <li>{p.title}</li>
            {/* {p.url && <img src={p.url} width="200"/>} */}
          </div>
        ))}
      </ul>
    </div>
  );
};

// listen DOM event
const DOMEvent = () => {
  const [type, setType] = useState("posts");
  const [datas, setDatas] = useState([]);
  const [showButtonTop, setShowButtonTop] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);
      });
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
      setShowButtonTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    console.log("addEventListener");

    //clearnup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
      console.log("RemoveEventListener");
    };
  }, [showButtonTop]);

  return (
    <div>
      {myTabs.map((tab) => (
        <button
          key={tab}
          style={
            type === tab
              ? {
                  color: "#fff",
                  backgroundColor: "#333",
                }
              : {}
          }
          onClick={(e) => {
            setType(tab);
          }}
        >
          {tab}
        </button>
      ))}
      <ul>
        {datas.map((d) => (
          <li key={d.id}>{d.title}</li>
        ))}
      </ul>
      {showButtonTop && (
        <button
          style={{
            position: "fixed",
            right: 20,
            bottom: 20,
          }}
        >
          Go to top
        </button>
      )}
    </div>
  );
};

// listen DOM clearup function
const Resize = () => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const hanldeResize = () => {
      setSize(window.innerWidth);
    };

    window.addEventListener("resize", hanldeResize);

    return () => {
      window.removeEventListener("resize", hanldeResize);
    };
  });
  return (
    <div>
      <h1>{size}</h1>
    </div>
  );
};
export default Resize;
