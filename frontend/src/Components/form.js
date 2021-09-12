import React, { useState} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios'
import { Form, Input, Button, Select,Row, Col,Modal, Descriptions, Tag, Space  } from 'antd';
const { Option } = Select;
const { Column, ColumnGroup } = Table;


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

const SubmitForm=()=>{
//     const [form] = Form.useForm();
   const [requiredMark, setRequiredMarkType] = useState('optional');
   const [basic, setBasic]= useState(0)
   const [lta, setLta]= useState(0)
   const [hra, setHra]= useState(0)
   const [food, setFood]=useState(0)
   const [inv, setInv] = useState(0)
   const [rent, setRent] = useState(0)
   const [type, setType] = useState('')
   const [inc, setInc] = useState(0)
   const [isModalVisible, setIsModalVisible] = useState(false);

  
  const classes = useStyles();
  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };
  function onChange(value) {
    console.log(`selected ${value}`);
    setType(value)
    console.log('type', type)
  }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  
  function onBlur() {
    console.log('blur');
  }
  
  function onFocus() {
    console.log('focus');
  }
  
  function onSearch(val) {
    console.log('search:', val);
  }

  const handleBasic=(e)=>{
   // console.log(e.target.value)
    setBasic(e.target.value)
    console.log('basic', basic)
  }
  const handleLta=(e)=>{
    //console.log(e.target.value)
    setLta(e.target.value)
    console.log('lta', lta)
  }

  const handleHra=(e)=>{
   //console.log(e.target.value)
    setHra(e.target.value)
    console.log('hra', hra)
  }
  const handleFood=(e)=>{
    //console.log(e.target.value)
    setFood(e.target.value)
    console.log('food', food)
  }
  const handleInv=(e)=>{
   // console.log(e.target.value)
    setInv(e.target.value)
    console.log('Inv', inv)
  }
  const handleRent=(e)=>{
    //console.log(e.target.value)
    setRent(e.target.value)
    console.log('rent', rent)
  }
  const handleType=(value)=>{
   // console.log(e.target.value)
    setType(value)
    console.log('type', type)
  }
  const handleInc=(e)=>{
    console.log(e.target.value)
    setInc(e.target.value)
    console.log('inc', inc)
  }
  
  const handleSubmit=(e)=>{
    console.log('submitted')
    setIsModalVisible(true);
    axios.post('http://localhost:5000/postdata', {
        basic,
        lta, 
        hra, 
        food,
        inv,
        rent,
        type,
        inc
    }).then(res=>{
        console.log(res)
    }).catch(err=>{
        console.log(err)
    })
   
  }


  const openModal=()=>{
      return(
          <>

        <Modal title="TaxHr" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <p>Basic:{basic}</p>
            <p>LTA:{lta}</p>
            <p>HRA:{hra}</p>
            <p>Food allownace:{food}</p>
            <p>Investments:{inv}</p>
            <p>Rent:{rent}</p>
            <p>City Type:{type}</p>
            <p>Medical insurance:{inc}</p>
        </Modal>
  </>
      )
    
  }
    return(
        <>
        <Row>
        <Col span={8}></Col>
        <Col span={8}>
         <Form
      layout="vertical"
      initialValues={{
        requiredMarkValue: requiredMark,
      }}
      onValuesChange={onRequiredTypeChange}
      requiredMark={requiredMark}
    >
      <Form.Item label="Basic" required tooltip="This is a required field" onChange={handleBasic}>
        <Input placeholder="Basic salary" />
      </Form.Item>
      <Form.Item
        label="LTA"
        required tooltip="This is a required field"
        onChange={handleLta}
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item
        label="HRA"
        required tooltip="This is a required field"
        onChange={handleHra}
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item
        label="Food Allowance"
        required tooltip="This is a required field"
        onChange={handleFood}
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item
        label="Investments under section 80C"
        required tooltip="This is a required field"
        onChange={handleInv}
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item
        label="Rent"
        required tooltip="This is a required field"
        onChange={handleRent}
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item
        label="City Type"
        required tooltip="This is a required field"
        //onChange={handleType(value)}
      >
        <Select
    showSearch
    style={{ width: 425 }}
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
    
  >
    <Option value="Metro">Metro</Option>
    <Option value="Non-Metro">Non-Metro</Option>
    
  </Select>
      </Form.Item>
      <Form.Item
        label="Mediclaim policy premium"
        required tooltip="This is a required field"
        onChange={handleInc}
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item onClick={handleSubmit}>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
    </Col>
    </Row>
    {isModalVisible?openModal():null}
        </>
    )
}

export default SubmitForm