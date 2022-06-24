import { FC } from 'react';

type ChevronRightProps = {
  color?: string;
  size?: number;
};

export const ChevronRight: FC<ChevronRightProps> = ({ color = '#000', size = 11 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size + 9} viewBox="0 0 11 20">
    <path
      fill={color}
      fillRule="evenodd"
      d="M249.366 6538.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827l-8.625-8.325a1.063 1.063 0 0 0-1.454-.01.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414l-7.831 7.557a.974.974 0 0 0 0 1.413"
      transform="translate(-249 -6519)"
    />
  </svg>
);