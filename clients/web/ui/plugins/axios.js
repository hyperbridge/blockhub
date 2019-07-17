export default function (app) {
	app.$axios.onRequest(config => {
	  if (app.store.state.token) {
		config.headers.common['Authorization'] = `bearer ${app.store.state.token}`
	  }
	})

	app.$axios.onError(error => {
	  if (process.env.isDevelopment) console.error('Axios error', error)
	  if (process.browser) {
		const text = error.response && error.response.data && error.response.data.message ? error.response.data.message : 'Network unreachable'
		app.store.dispatch('alert', {
		  text,
		  color: 'error',
		  duration: 5000
		})
	  }

	  // If the error is an unauthorized call, don't report it.
	  if (error.response.status === 401) return

	  // If the error is about payload being too big, don't report it.
	  if (error.response.status === 413) return

	  app.$sendEvent({
		data: error.response.data,
		headers: error.response.headers
	  }, 'error-api')
	})
  }
