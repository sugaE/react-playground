import React from "react";
//1.完成FamilyTree组件渲染出品字布局的家族谱

//2.鼠标移动到每个节点时节点背景色变为浅蓝色

//3.点击父节点实现子节点的隐藏和显示,隐藏和显示过程中有动画效果

function FamilySub(props) {
  const { parent: originP, add } = props || {};
  const [hide, setHide] = React.useState(false);
  const [parent, setParent] = React.useState(originP);

  const onClickName = () => {
    // setHide(!hide);
    if (add) {
      setParent({
        ...parent,
        children: (parent.children || []).concat({ name: add })
      });
    }
  };

  return parent ? (
    <div className="table-col">
      <div className="table-name" onClick={onClickName}>
        {parent.name}
      </div>
      {!!parent.children && (
        <FamilyTree family={parent.children} hide={!!hide} add={add} />
      )}
    </div>
  ) : null;
}

function FamilyTree(props) {
  const { family, hide, add } = props || {};
  return Array.isArray(family) ? (
    <div className={`table-container shown ${hide ? "hidden" : ""}`}>
      {family.map(v => (
        <FamilySub parent={v} add={add} />
      ))}
    </div>
  ) : null;
}

const dataSource = [
  {
    name: "爷爷",
    children: [
      {
        name: "爸爸",
        children: [
          {
            name: "我",
            children: [{ name: "儿子" }, { name: "女儿" }]
          },
          { name: "妹妹" },
          { name: "哥哥" }
        ]
      },
      {
        name: "叔叔",
        children: [{ name: "堂兄" }, { name: "堂妹" }]
      }
    ]
  }
];

function search(data, key) {}

export default class Tree extends React.Component {
  state = {
    dataSource,
    vInput: ""
  };
  // vInput = '';

  changeSearch = e => {
    const { value } = e.currentTarget;
  };

  changeInput = e => {
    const { value } = e.currentTarget;
    this.vInput = value;
  };

  addNode = () => {
    //深拷贝todo
    // let {dataSource} = this.state;
    // dataSource[0].children.push({name: this.vInput})
    this.setState({
      vInput: this.vInput
    });
  };

  deleNode = () => {
    //深拷贝todo
    let { dataSource } = this.state;
    dataSource[0].children = dataSource[0].children.filter(
      v => v.name !== this.vInput
    );
    this.setState({
      dataSource: dataSource
    });
  };

  export = () => {
    console.log(JSON.stringify(this.state.dataSource));
  };

  render() {
    const { dataSource, vSearch, vInput } = this.state;
    return (
      <div className="container">
        <input type="text" value={vSearch} onChange={this.changeSearch} />

        <div>
          <input type="text" onChange={this.changeInput} />
          <button onClick={this.addNode}>add</button>
          {/*<button onClick={this.deleNode}>delete</button>*/}
        </div>

        <button onClick={this.export}>export</button>

        <FamilyTree family={dataSource} add={vInput} />
      </div>
    );
  }
}
