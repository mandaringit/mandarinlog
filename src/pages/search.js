import React, { Component } from "react"
import algoliasearch from "algoliasearch/lite"
import { Algolia } from "styled-icons/fa-brands/Algolia"
import styled from "styled-components"
import PageLayout from "../components/Layout/pageLayout"
import queryString from "query-string"
import FakeSearchbox from "../components/Search/FakeSearchbox"
import {
  InstantSearch,
  Hits,
  connectStateResults,
} from "react-instantsearch-dom"
import { AllHit } from "../components/Search/allHit"

const Stats = connectStateResults(
  ({ searchResults: res }) =>
    res && res.nbHits > 0 && `${res.nbHits}개의 검색 결과`
)

const Results = connectStateResults(({ searchResults: res, children }) => {
  if (res && res.nbHits) {
    return children
  } else {
    return `검색결과가 없습니다.`
  }
})

class Search extends Component {
  searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
  )

  render() {
    const searchIndices = { name: `all`, title: `🔍 검색결과`, hitComp: AllHit }
    const { query } = queryString.parse(this.props.location.search)
    return (
      <PageLayout>
        <InstantSearch
          searchClient={this.searchClient}
          indexName={searchIndices.name}
        >
          {/* 아래 검색박스는 숨긴다 */}
          <FakeSearchbox defaultRefinement={query} />
          <SearchResultWrapper>
            <IndexWrapper>
              <IndexName>{searchIndices.title}</IndexName>
              <ResultText>
                <Stats />
              </ResultText>
            </IndexWrapper>
            <ResultText>
              <Results>
                <HitsWrapper>
                  <Hits hitComponent={searchIndices.hitComp} />
                </HitsWrapper>
              </Results>
            </ResultText>

            <By>
              Powered by{" "}
              <a href="https://www.algolia.com">
                <Algolia size="0.6rem" /> Algolia
              </a>
            </By>
          </SearchResultWrapper>
        </InstantSearch>
      </PageLayout>
    )
  }
}

export default Search

const SearchResultWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
`

const IndexWrapper = styled.div`
  display: flex;
  align-items: center;
`

const IndexName = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  margin-right: 0.5rem;
  color: white;
  background-color: black;
  padding: 0.3rem 0.5rem;
  border-radius: 3px;
`

const By = styled.span`
  font-size: 0.6em;
  text-align: end;
  padding: 0;
  margin-bottom: 1rem;
`

const ResultText = styled.div`
  font-size: 0.8rem;
  color: #3f51b5;
  margin: 0.5rem;
`

const HitsWrapper = styled.div`
  border: 1px solid ${props => props.theme.postBorderColor};
  border-radius: 3px;
`
