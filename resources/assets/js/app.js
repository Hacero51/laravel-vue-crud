
new Vue({
    el: '#crud',
    created: function() {
        this.getKeeps();
    },
    data: {
        keeps: [],
        newkeep: '',
        fillKeep: {'id': '', 'keep': ''},
        errors: [],
    },
    methods: {
        getKeeps: function() {
            var urlKeeps = 'tasks';
            axios.get(urlKeeps).then(response => {
                this.keeps = response.data
            });
        },
        editKeep: function(keep) {
            this.fillKeep.id     = keep.id;
            this.fillKeep.keep = keep.keep;
            $('#edit').modal('show');
        },
        updatekeep: function (id){
            var url = 'tasks/'+id;
            axios.put(url, this.fillKeep).then(response=>{
                this.getKeeps();
                this.fillKeep= {'id': '', 'keep': ''};
                this.errors=[];
                $('#edit').modal('hide');
                toastr.success('tarea actualizada exitosamente');
            }).catch(error=>{
                this.errors=>error.response.data
            });
        },
        deleteKeep: function(keep){
        	var url='tasks/'+keep.id;
        	axios.delete(url).then(response =>{
        		this.getKeeps();
        		toastr.success('eliminado correctamente');
        	});
        },
        createkeep: function(){
            var url = 'tasks';
            axios.post(url,{
                keep: this.newkeep
            }).then(response=>{
                this.getkeeps();
                this.newkeep = '';
                this.errors = [];
                $('#create').modal('hide');
                toastr.success('nueva tarea creada correctamente');
            }).catch(error=>{
                this.errors=error.response.data
            })

        }

    }
});

