import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actionsCategory from "../actions/categoriesActions";
import "../styles/Sidebar.sass";

const Sidebar = () => {
  const { categories, loading, error } = useSelector(
    (state) => state.categoriesReducer
  );

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(actionsCategory.getAllCategories());
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <section className="sidebar">
      <div className="sidebar__header">
        <h2 className="sidebar__header-title">Categories</h2>
      </div>
      <div className="sidebar__body">
        <ul>
          {categories && categories.map((category) => (
            <li key={category.id}>{category.attributes.title}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
