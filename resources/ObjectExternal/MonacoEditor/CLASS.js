class MonacoEditor extends Simplicite.UI.ExternalObject {
	async render(params, data = {}) {
		// console.log(params, data);
		$ui.loadScript({
			url: 'https://unpkg.com/monaco-editor@latest/min/vs/loader.js',
			onload: () => {
				// console.log('Monaco loader loaded!');
				try {
					require.config({ paths: { 'vs': 'https://unpkg.com/monaco-editor@latest/min/vs' }});
	
					require([ 'vs/editor/editor.main' ], () => {
						// console.log('Monaco main loaded!');
	
						const container = document.getElementById('monaco-editor');
						container.innerHTML = '';
	
						const editor = monaco.editor.create(container, {
							automaticLayout: true,
							theme: 'vs-dark',
							//value: 'public void main() {\n\tSystem.out.println("Hello world!");\n}\n',
							//language: 'java',
							//value: 'function test() {\n\twindow.alert("Hello world!");\n}\n',
							//language: 'javascript',
							value: '<html>\n\t<body>\n\t\t<p>Hello world!</p>\n\t<body>\n</html>\n',
							language: 'html'
						});
					});
				} catch(err) {
					alert(err.message);
				}
			}
		});
	}
}