import React,{Fragment,creatContext,useReducer} from "react";
import AdminLayout from "../layout";
import CategoryMenu from "./CategoryMenu";
import AllCategories from "./AllCategories";
import { categoryState,categoryReducer } from "./CategoryContext";
export const CategoryContext=creatContext();
