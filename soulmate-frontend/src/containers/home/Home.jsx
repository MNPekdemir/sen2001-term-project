import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dropdown, Button } from 'semantic-ui-react';

import api from '../../api/axios';
import { USER, MATCHES } from '../../api/endpoints';

import UserList from './UserList';

const Home = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const categories = useSelector((state) => state.common.categories);
  const isLogin = localStorage.getItem('token') || !!token;

  const [rawUsers, setRawUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [matches, setMatches] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);

  const [filterCategory, setFilterCategory] = useState();

  useEffect(() => {
    api.get(USER).then(({ data }) => {
      const filteredData = data.filter(({ role }) => role === 2);
      filteredData.sort((a, b) => (a.firstName > b.firstName ? 1 : -1));
      setUsers(filteredData);

      setRawUsers(filteredData);
    });
  }, [setUsers, setRawUsers, dispatch]);

  useEffect(() => {
    if (isLogin) {
      api.get(MATCHES).then(({ data }) => {
        setMatches(data);
      });
    }
  }, [isLogin]);

  useEffect(() => {
    setCategoryOptions(
      categories.map((c) => ({ key: c._id, text: c.name, value: c._id }))
    );
  }, [categories, setCategoryOptions]);

  const onCategorySelect = (_, { value }) => {
    setFilterCategory(value);
  };

  const clearFilter = () => {
    setFilterCategory(null);
  };

  useEffect(() => {
    if (!filterCategory) {
      setUsers(rawUsers);
    } else {
      let filteredUsers = rawUsers;
      if (filterCategory) {
        filteredUsers = filteredUsers.filter((u) => {
          return u.categoryIds.some((c) => c._id === filterCategory);
        });
      }
      setUsers(filteredUsers);
    }
  }, [filterCategory, setUsers, rawUsers]);

  return (
    <div>
      {isLogin && (
        <>
          <div className="home-header">Matching Users</div>
          <div style={{ marginBottom: '100px' }}>
            <UserList users={matches} />
          </div>
        </>
      )}
      <div className="home-header">All Users</div>
      <div className="home-filter">
        <div className="home-filter-dropdown">
          <Dropdown
            placeholder="Category"
            search
            selection
            value={filterCategory}
            options={categoryOptions}
            onChange={onCategorySelect}
          />
        </div>
        <div className="home-filter-dropdown">
          <Button onClick={clearFilter} color="blue">
            Clear
          </Button>
        </div>
      </div>
      <UserList users={users} />
    </div>
  );
};

export default Home;
