import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { quoteFetch } from "../actions/quoteActions";
import Spinner from "./Spinner";
import QuoteItem from "./QuoteItem";

const QuoteDisplay = ({ className, quoteFetch, quote }) => {
  useEffect(() => {
    quoteFetch();
  }, []);
  const renderContent = quote.loading ? (
    <Spinner />
  ) : quote.error ? (
    <div>Quote error</div>
  ) : (
    <QuoteItem quote={quote.quote} />
  );
  return <div className={className}>{renderContent}</div>;
};

const StyledQuoteDisplay = styled(QuoteDisplay)`
  width: 80%;
`;

const mapStateToProps = state => ({
  quote: state.quote
});

export default connect(
  mapStateToProps,
  { quoteFetch }
)(StyledQuoteDisplay);
