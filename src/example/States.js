import React, { useState } from "react";

const orders = [200, 300, 400];

const MyState = () => {
  // const total = orders.reduce((prev,value)=> prev + value);
  // console.log(total);
  const [counter, setCounter] = useState(
    orders.reduce((total, value) => total + value)
  );

  const hanldeIncrease = () => {
    setCounter(counter + 1);
  };
  return (
    <div style={{ padding: 20 }}>
      <h1>{counter}</h1>
      <button onClick={hanldeIncrease}>Increase</button>
    </div>
  );
};

const Info = () => {
  const [info, setInfo] = useState({
    name: "Nguyen Van A",
    age: 40,
    email: "higochu@motivesvn.com",
  });

  const handleUpdate = () => {
    setInfo((prev) => {
      // todo
      // ...

      return { ...prev, phone: "1231231" };
    });
  };
  return (
    <div>
      <p>{JSON.stringify(info)}</p>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

//bai tap lay phan thuong
const gifts = ["CPU CORE i9", "RAM 32GH RGB", "Keyboard RGB"];

const RandomGrifs = () => {
  const [gift, setGift] = useState();
  const handleGetGift = () => {
    let r = Math.floor(Math.random() * gifts.length);
    console.log(r);
    setGift(gifts[r]);
  };
  return (
    <div style={{ padding: 32 }}>
      <h2>{gift || "Chưa có phần thưởng"}</h2>
      <button onClick={handleGetGift}>Rút Thưởng</button>
    </div>
  );
};

// bai tap onw-way binding / two-way binding
const OneWay = () => {
  const [name, setName] = useState("");

  const changeName = () => {
    setName("Nguyen Van B");
    console.log(name);
  };
  return (
    <div style={{ padding: 20 }}>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          console.log(name);
        }}
      />
      <button onClick={changeName}>Change</button>
    </div>
  );
};

// two-way binding
const TwoWay = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const submit = () => {
    console.log({
      user,
      pass,
    });
  };
  return (
    <div style={{ padding: 20 }}>
      <input value={user} onChange={(e) => setUser(e.target.value)} />
      <input value={pass} onChange={(e) => setPass(e.target.value)} />
      <button onClick={submit}>Submit</button>
    </div>
  );
};

// two-way binding for radio
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
    name: "React DOM",
  },
];
const TwoWayRadio = () => {
  const [checked, setChecked] = useState();
  const handleSubmit = () => {
    console.log({
      id: checked,
    });
  };
  return (
    <div style={{ padding: 20 }}>
      {courses.map((course) => (
        <div key={course.id} onClick={() => setChecked(course.id)}>
          <input
            checked={checked === course.id}
            type="radio"
            onChange={() => setChecked(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

//two-way biding with checkbox
const TwoWayCheckBox = () => {
  const [checked, setChecked] = useState([]);
  console.log(checked);
  const handleSubmit = () => {
    console.log({ id: checked });
  };
  const hanldeChange = (id) => {
    setChecked((prev) => {
      const isChecked = checked.includes(id);
      if (isChecked) {
        return checked.filter((x) => x !== id);
      } else {
        return [...prev, id];
      }
    });
  };
  return (
    <div style={{ padding: 20 }}>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="checkbox"
            checked={checked.includes(course.id)}
            onChange={() => hanldeChange(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

// Bai tap todolist
const TodoList = () => {
  const [todo, setTodo] = useState();
  const [listTodo, setListTodo] = useState(() => {
    const local = JSON.parse(localStorage.getItem("ListTodo"));

    return local ?? [];
  });
  const handleNhap = () => {
    setListTodo((prev) => {
      const list = [...prev, todo];

      localStorage.setItem("ListTodo", JSON.stringify(list));
      return list;
    });
    setTodo("");
  };
  return (
    <div style={{ padding: 10 }}>
      <input value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={handleNhap}>Nhập Todo</button>
      <ul>
        {listTodo.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
