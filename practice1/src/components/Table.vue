<template>
    <div class="table">
        <fieldset>
            <legend>
                Create New Person
            </legend>
            <div class="form-group">
                <label class="col-sm-1 control-label">Name:</label>
                <input type="text" v-model="newPerson.name"/>
            </div>
            <div class="form-group">
                <label class="col-sm-1 control-label">Age:</label>
                <input type="text" v-model="newPerson.age"/>
            </div>
            <div class="form-group">
                <label class="col-sm-1 control-label">Sex:</label>
                <select v-model="newPerson.sex">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
            <div class="form-group">
                <label></label>
                <button class="btn btn-success" @click="createPerson">Create</button>
            </div>
        </fieldset>
        <table class="table">
            <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Sex</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
<!--            <tr v-for="(person ,index)  in people">-->
            <tr v-for="(person,index) in people" :key="index">
                <td>{{ person.name }}</td>
                <td>{{ person.age }}</td>
                <td>{{ person.sex }}</td>
                <td><button class="btn btn-danger" @click="deletePerson(index)">Delete</button></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "Table",
        data() {
            return {
                newPerson:{
                    name: '',
                    age: '',
                    sex: 'Male'
                },
                people:[{
                    name:'Jack',
                    age: 30,
                    sex: 'Male'
                },{
                    name:'Bill',
                    age: 26,
                    sex: 'Male'
                },{
                    name: 'Tracy',
                    age: 22,
                    sex: 'Female'
                },{
                    name: 'Chris',
                    age: 36,
                    sex: 'Male'
                }]
            }
        },
        methods:{
            createPerson: function(){
                this.people.push(this.newPerson);
                // 添加完newPerson对象后，重置newPerson对象
                this.newPerson = {name: '', age: '', sex: 'Male'}
            },
            deletePerson: function(index){
                // 删一个数组元素
                this.people.splice(index,1);
            }
        }
    }


</script>

<style scoped>
    /* MD 这个弱智boostrap居然把fieldset和legend给disable了 */
    fieldset{padding:.35em .625em .75em;margin:0 2px;border:1px solid silver}
    legend{padding:.5em;border:0;width:auto}
</style>