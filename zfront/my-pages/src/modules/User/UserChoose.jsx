import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWorkers } from "../../features/team/userSlice";

const UserChoose = () => {
  const { workers } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchWorkers());
    };

    fetchData();
  }, [workers]);

  return (
    <div>
      <h1>Hi</h1>
      {workers.map((person) => {
        return <div>{person.name}</div>;
      })}
    </div>
  );
};

export default UserChoose;
