import '../App.css';
import { Collapse, Divider, List, Input, Checkbox } from 'antd';
import React from 'react';
// import { dataNonFB } from './ChecklistData';

export default function ChecklistNonFB() {

    //FOR DROPDOWN
    const { Panel } = Collapse;

    //FOR CHECKBOX:
    const updateInput = (ref, checked) => {
        const input = ref.current;
        if (input) {
            input.checked = checked;
            input.indeterminate = checked == null;
        }
    };

    const ThreeStateCheckbox = ({ name, checked, onChange }) => {
        const inputRef = React.useRef(null);
        const checkedRef = React.useRef(checked);
        React.useEffect(() => {
            checkedRef.current = checked;
            updateInput(inputRef, checked);
        }, [checked]);
        const handleClick = () => {
            switch (checkedRef.current) {
                case false:
                    checkedRef.current = null;
                    break;
                case null:
                    checkedRef.current = true;
                    break;
                default: // true
                    checkedRef.current = false;
                    break;
            }
            updateInput(inputRef, checkedRef.current);
            if (onChange) {
                onChange(checkedRef.current);
            }
        };
        return (
            <input
                ref={inputRef}
                type="checkbox"
                name={name}
                onClick={handleClick} />
        );
    };

    const [checked, setChecked] = React.useState(true);
    const handleChange = (checked) => {
        console.log(`checked: ${checked}`);
    };

    //FOR REMARKS INPUT BOX
    const { TextArea } = Input;

    const onChange = e => {
        console.log(e);
    };

    //

    return (
        <>
            <h2 className="start">Audit Checklist (Non-F&B)</h2>

            <Divider />

            <div>
                <Collapse accordion defaultActiveKey="1" >

                    <Panel header="1. Professionalism & Staff Hygiene (20%)" key="1" className="bg-orange text-white">

                        <Collapse accordion defaultActiveKey="1" >
                            <Panel header="Professionalism" key="1" className="bg-orange text-white">
                                <List
                                    // dataSource={dataNonFB.data1_1}
                                    renderItem={item => (
                                        <List.Item>
                                            <div className="row justify-between">
                                                {item}
                                                <ThreeStateCheckbox checked={checked} onChange={handleChange} />
                                            </div>
                                        </List.Item>
                                    )}
                                />
                            </Panel>

                            <Panel header="Staff Hygiene" key="2" className="bg-orange text-white">
                                <List
                                    // dataSource={dataNonFB.data1_2}
                                    renderItem={item => (
                                        <List.Item>
                                            <div className="row justify-between">
                                                {item}
                                                <ThreeStateCheckbox checked={checked} onChange={handleChange} />
                                            </div>
                                        </List.Item>
                                    )}
                                />
                            </Panel>
                        </Collapse>
                        <div class="pt-10 font-bold text-right">Score: __/20%</div>

                    </Panel>

                    <Panel header="2. Housekeeping & General Cleanliness (40%)" key="2" className="bg-orange text-white">
                        <Collapse accordion defaultActiveKey="1" >
                            <Panel header="General Environment Cleanliness" key="1" className="bg-orange text-white">
                                <List
                                    // dataSource={dataNonFB.data2_1}
                                    renderItem={item => (
                                        <List.Item>
                                            <div className="row justify-between">
                                                {item}
                                                <ThreeStateCheckbox checked={checked} onChange={handleChange} />
                                            </div>
                                        </List.Item>
                                    )}
                                />
                            </Panel>
                        </Collapse>
                        <div class="pt-10 font-bold text-right">Score: __/40%</div>
                    </Panel>

                    <Panel header="3. Workplace Safety & Health (40%)" key="3" className="bg-orange text-white">

                        <Collapse accordion defaultActiveKey="1">
                            <Panel header="General Safety" key="1" className="bg-orange text-white">
                                <List
                                    // dataSource={dataNonFB.data3_1}
                                    renderItem={item => (
                                        <List.Item>
                                            <div className="row justify-between">
                                                {item}
                                                <ThreeStateCheckbox checked={checked} onChange={handleChange} />
                                            </div>
                                        </List.Item>
                                    )}
                                />
                            </Panel>

                            <Panel header="Fire & Emergency Safety" key="2" className="bg-orange text-white">
                                <List
                                    // dataSource={dataNonFB.data3_2}
                                    renderItem={item => (
                                        <List.Item>
                                            <div className="row justify-between">
                                                {item}
                                                <ThreeStateCheckbox checked={checked} onChange={handleChange} />
                                            </div>
                                        </List.Item>
                                    )}
                                />
                            </Panel>

                            <Panel header="Electrical Safety" key="3" className="bg-orange text-white">
                                <List
                                    // dataSource={dataNonFB.data3_3}
                                    renderItem={item => (
                                        <List.Item>
                                            <div className="row justify-between">
                                                {item}
                                                <ThreeStateCheckbox checked={checked} onChange={handleChange} />
                                            </div>
                                        </List.Item>
                                    )}
                                />
                            </Panel>
                        </Collapse>
                        <div class="pt-10 font-bold text-right">Score: __/40%</div>

                    </Panel>

                </Collapse>
            </div>

            <div class="pt-20">
                <TextArea placeholder="Remarks" allowClear onChange={onChange} />
            </div>

            <Divider />

            <div class="row justify-between">
                <div>Professionalism & Staff Hygiene</div>
                <div>__/20%</div>
            </div>
            <div class="row justify-between">
                <div>Housekeeping & General Cleanliness</div>
                <div>__/40%</div>
            </div>
            <div class="row justify-between">
                <div>Workplace Safety & Health</div>
                <div>__/40%</div>
            </div>
            <div class="row justify-between font-bold">
                <div>Total</div>
                <div>__/100%</div>
            </div>
        </>

    )
}
