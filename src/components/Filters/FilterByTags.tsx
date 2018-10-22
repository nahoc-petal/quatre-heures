import * as React from 'react';
import { Translate } from 'react-i18nify';
import { ITag } from '../../models/Tag.interface';
import { Tag } from './../Tag/Tag';

interface IFilterByTagsProps {
  tagsFilter: ITag[];
  handleOnClick: (id: number) => void,
}

export const FilterByTags: React.SFC<IFilterByTagsProps> = ({ tagsFilter, handleOnClick }) => (
  <div className="field is-horizontal">
    <div className="field-label is-normal">
      <label className="label">      
        <Translate value="filters.searchByTags" />
      </label>
    </div>
    <div className="field-body">
      <div className="tags">
        {tagsFilter.map((tag: ITag) => {
          return(
            <Tag
              id={tag.id}
              handleOnClick={handleOnClick}
              key={tag.name}
              size={'is-medium'}
              selected={tag.selected}
            >
              {tag.name}
            </Tag>
          );
        })}
      </div>
    </div>
  </div>
);