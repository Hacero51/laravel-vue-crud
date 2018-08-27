<form method="POST" v-on:submit.prevent="createkeep">
	<div class="modal fade" id="create">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h4 align="center">Nueva Tarea</h4>
						<span>X</span>
					</button>
				</div>
				<div class="modal-body">
					<label for="keep">Crear Tarea</label>
					<input type="text" name="keep" class="form-control" v-model="newkeep">
					<span v-for="error in errors" class="text-danger">@{{error}}</span>
				</div>
				<div class="modal-footer">
					<input type="submit" class="btn btn-primary" value="Guardar">
				</div>
			</div>
		</div>
	</div>
</form>

