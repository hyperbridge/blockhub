export const extract = (object, props) => ['id', 'name', ...props]
    .reduce((extracted, prop) => object[prop]
        ? { ...extracted, [prop]: object[prop] }
        : extracted
    , {});

export const skip = (object, props) => {
    const copy = { ...object };
    for (let prop in props) {
        delete copy[prop];
    }
    return copy;
};

export const getId = () => Math.floor(Math.random() * 10000);

export const assignId = (id, object) => ({ ...object, data: { ...object.data, id }, id });

export const mergeId = (id, object) => ({ ...object, data: { ...object.data, id }, id });

export const normalize = data => data
    .reduce((normalized, data) => ({
        ...normalized,
        [data.id]: data
    }), {});


const data = [
    {
      id: 1,
      messages: [{ id: 1, txt: "Hello" }, { id: 2, txt: "HI!" }]
    },
    {
      id: 2,
      messages: [
        { id: 3, txt: "Nice" },
        { id: 4, txt: "h", author: { id: 1, name: 'Rock' }}
      ]
    }
  ];

  const identities = {};
  const messages = {};

  export const decompose = (main, nested, data) => {

    const spreadProps = nested.reduce((obj, prop) => ({
      ...obj,
      [prop]: {}
    }), { [main]: {} });


    return data.reduce((spread, item) => {

      const decomposed = { ...item };

      for (let nestedProp of nested) {
        decomposed[nestedProp] = item[nestedProp].map(val => val.id);

        for (let nestedVal of item[nestedProp]) {
          spread[nestedProp][nestedVal.id] = nestedVal;
        }
      }

      spread[main][item.id] = decomposed;

      return spread;
    }, spreadProps);
  }

//   const deco = decompose('identities', ['messages'], data);

//   const decomp = () => ({});
//   const { idts, msgs, users } = decomp(['identities|idts', 'messages|msgs', 'messages/author|users'], data);

