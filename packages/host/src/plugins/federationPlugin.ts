import { init, loadRemote as _loadRemote } from '@module-federation/runtime'

interface Remote {
  module: string
  entry: string
}

interface LoadedModule {
  mount: () => void
  unmount: () => void
}

export const federationPlugin = {
  install: (_: any, remotes: Remote[]) => {
    const mfRemotes = remotes.map((remote) => ({
      name: remote.module,
      entry: remote.entry,
      type: 'module',
    }))

    init({
      name: 'host',
      remotes: mfRemotes,
    })
  },
}

export default federationPlugin

export const useModuleFederation = () => {
  const loadRemote = async (module: string) => {
    const loadedModule = (await _loadRemote(`${module}/entry`)) as LoadedModule
    return {
      name: module,
      mount: loadedModule.mount,
      unmount: loadedModule.unmount,
    }
  }
  return { loadRemote }
}
