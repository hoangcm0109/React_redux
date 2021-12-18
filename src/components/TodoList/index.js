import { Col, Row, Input, Button, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../../redux/actions";
import { searchFilterSelector, todoListSelector } from "../../redux/selectors";
import Todo from "../Todo";

export default function TodoList() {
  const dispatch = useDispatch();
  const getTodoList = useSelector(todoListSelector);
  // const searchText = useSelector(searchFilterSelector)

  const [todo, setTodo] = useState("");
  const [status, setStatus] = useState("Medium");

  const handleChangeTodo = (e) => {
    setTodo(e.target.value);
  };

  const handleStatus = (value) => {
    setStatus(value);
  };

  const handleAddTodo = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        name: todo,
        prioriry: status,
        completed: false,
      })
    );

    setTodo("");
    setStatus("Medium");
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {getTodoList
          ? getTodoList.map((todo) => (
              <Todo
                name={todo.name}
                prioriry={todo.prioriry}
                key={todo.id}
                completed={todo.completed}
                id={todo.id}
              />
            ))
          : ""}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todo} onChange={handleChangeTodo} />
          <Select defaultValue="Medium" value={status} onChange={handleStatus}>
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddTodo}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
