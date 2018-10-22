import { css, StyleSheet } from 'aphrodite';
import * as React from 'react';
import { 
  FilterByDate, 
  FilterByImpact,
  FilterByName,
  FilterByService,
  FilterByStatus,
  FilterByTags,
  FiltersHeader,
  History, 
  ShowMore 
} from '../../components';
import { ITag } from '../../models/Tag.interface';

interface IFilterByNameState {
  nameFilter: string;
  tagsFilters: ITag[];
}

const styles = StyleSheet.create({
  filtersStyle: {
    backgroundColor: '#ffffff',
    border: '1px solid #e8e8e8',
    borderTop: 0,
    marginBottom: '2rem',
    padding: '1.5rem',
  }
});

export class HistoryPage extends React.Component<IFilterByNameState> {

  state = {
    nameFilter: '',
    tagsFilter: [
      {
        id: 0,
        name: 'One',
        selected: true,
      },
      {
        id: 1,
        name: 'Two',
        selected: true,
      },
      {
        id: 2,
        name: 'Three',
        selected: false,
      }
    ],
  };

  onFilterByTagClick = (id: number) => {
    const { tagsFilter } = this.state;
    const clickedTag = tagsFilter.find(tag => tag.id === id);

    if (clickedTag) {
      clickedTag.selected = !clickedTag.selected;
      this.setState({
        tagsFilter
      });
    }
  }

  onFilterByNameChange = (nameFilter: string) => {
    this.setState({
      nameFilter,
    });
  }

  render() {
    const {
      tagsFilter,
    } = this.state;

    return (
      <section className="section">
        <div className="container"> 
          <FiltersHeader />
          <div className={`${css(styles.filtersStyle)}`}>
            <FilterByName 
              handleOnChange={this.onFilterByNameChange}
            />
            <FilterByDate />
            <FilterByTags 
              handleOnClick={this.onFilterByTagClick}
              tagsFilter={tagsFilter}
            />
            <FilterByImpact />
            <FilterByService />
            <FilterByStatus />
          </div>
        </div>

        <div className="container">
          <div className="columns is-gapless">
            <div className="column is-half">
              <History />
            </div>
            <div className="column is-half">
              <History />
            </div>
          </div>
          <br/>
          <ShowMore />
        </div>
      </section>
    );
  }
}