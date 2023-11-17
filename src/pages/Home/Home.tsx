import React, {useState} from "react";
import "./styles.css";
import {FilterGroup, Input, Timeline} from "@/components";

export const Home: React.FC = () => {
  const buttonFilters = ["cat", "dog", "elephant", "lion", "monkey"];
  const [searchFilter, setSearchFilter] = useState<string>("");
  const [filter, setFilter] = useState<string>("");

  const handleFilter = (e: React.MouseEvent<HTMLElement>) => {
    setFilter((e.target as HTMLInputElement).value);
  };

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    setSearchFilter(value);
    setFilter(value);
  };

  return (
    <div className="home-container">
      <h1>Animal Gif Explorer</h1>
      <div className="home-header">
        <FilterGroup values={buttonFilters} onClick={handleFilter}/>
        <Input value={searchFilter} onChange={handleSearch} placeholder="Search a category"/>
      </div>
      <Timeline category={filter}/>
    </div>
  );
};