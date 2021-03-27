import styled from "styled-components";
import { BsSearch as icon } from "react-icons/bs";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 105px;
  background-color: rgb(28, 28, 28);
  color: white;
`;

export const Form = styled.form`
  width: 90%;
  height: 50%;
  background: rgb(53, 53, 53);
  border-radius: 4rem;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 32px;
  width: 100%;
  height: 100%;
`;

export const SearchIcon = styled(icon)`
  font-size: 2rem;
  margin-right: 0.5rem;
  cursor: pointer;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 90%;
  height: 90%;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background: transparent;
  color: white;
  font-size: 1.3rem;
  padding-left: 0.5rem;

  &:focus + label,
  &:valid + label {
    top: 0;
    opacity: 0;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 0.9rem;
  left: 0.5rem;
  text-transform: capitalize;
  opacity: 1;
  font-size: 1.3rem;
  webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  color: rgba(244, 244, 244, 0.5);
  &:active {
    top: 0;
    opacity: 0;
  }
`;
