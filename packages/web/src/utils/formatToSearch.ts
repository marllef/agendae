export const isIncluded = (value: string | any[], search: string | any) => {
  if (typeof value === 'string') {
    const mValue = value.toLowerCase();
    const mSearch = search.toLowerCase();
    return mValue.includes(mSearch);
  } else {
    return value.includes(search);
  }
};
