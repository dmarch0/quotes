import React, { useState, useEffect } from "react";
import styled from "styled-components";
import cn from "classnames";
import { FaArrowRight } from "react-icons/fa";
import { connect } from "react-redux";

import { quoteFetch } from "../actions/quoteActions";
import style from "../config/style";

const QuoteItem = ({ quote, className, quoteFetch }) => {
  const [mounted, mount] = useState(false);
  const [moved, move] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => mount(true), 0);
    return () => clearTimeout(timeoutId);
  }, [quote.text]);
  return (
    <div
      className={cn(className, { mounted, moved })}
      onTransitionEnd={event => {
        if (event.target.id === "quote-item") {
          quoteFetch();
        }
      }}
      id="quote-item"
    >
      <p className="quote">
        {quote.text.split(" ").map((word, index) => (
          <span key={index} style={{ transitionDelay: index * 0.1 + "s" }}>
            {word}&nbsp;
          </span>
        ))}
      </p>
      <p className="author">{quote.author.name}</p>
      <button onClick={() => move(true)}>
        <FaArrowRight size={30} />
      </button>
    </div>
  );
};

const StyledQuoteItem = styled(QuoteItem)`
  font-family: "Playfair Display", serif;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  transform: translate(0px, 0px);
  transition: all 0.2s ease-in;

  &.mounted {
    span {
      transform: translate(0);
      opacity: 1;
    }
  }
  &.moved {
    transform: translate(1000px, 0px);
  }
  span {
    transition-property: all;
    transition-duration: 0.1s;
    display: inline-block;
    transform: translate(-50px, 0);
    opacity: 0;
  }
  p {
    margin: 5px;
  }
  button {
    display: block;
    margin: auto;
    background-color: inherit;
    height: 40px;
    width: 40px;
    padding: 0;
    line-height: 30px;
    border: none;
    color: ${props => style[props.theme].secondaryText};
    &:focus {
      outline: none;
    }
  }
  .quote {
    text-align: center;
  }
  .author {
    text-align: right;
    font-size: 1rem;
  }
`;

const mapStateToProps = state => ({
  theme: state.theme
});

export default connect(
  mapStateToProps,
  { quoteFetch }
)(StyledQuoteItem);
