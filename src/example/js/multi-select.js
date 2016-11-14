$(function() {
    var multi_type, multi_status;
    var config_type = {
        ele: "m-type",
        data: [{
            name: "例子1",
            value: "33"
        }, {
            name: "例子2",
            value: "34"
        }, {
            name: "例子3",
            value: "35"
        }, {
            name: "例子1",
            value: "33"
        }, {
            name: "例子2",
            value: "34"
        }, {
            name: "例子3",
            value: "35"
        }, {
            name: "例子1",
            value: "33"
        }, {
            name: "例子2",
            value: "34"
        }, {
            name: "例子3",
            value: "35"
        }]
    }
    var config_status = {
        ele: "m-status",
        data: [{
            name: "状态1",
            value: "33"
        }, {
            name: "状态2",
            value: "34"
        }, {
            name: "状态3",
            value: "35"
        }]
    }
    multi_type = new MultiSelect(config_type);
    multi_status = new MultiSelect(config_status);
})
